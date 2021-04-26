import {createClient} from 'contentful';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import styles from './Slug.module.scss'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'recipe'
  })

  const paths = res.items.map(item => {
    return {
      params: {slug: item.fields.slug}
    }
  })

  return {
    paths,
    fallback: false
    // will show a 404 page instead of a fallback page
  }
}

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  })

  return {
    props: {recipe: items[0]},
    revalidate: 1
    // this checks for static regeneration, checks at most every 1 second
  }
}

export default function RecipeDetails({recipe}) {
  const {title, time, featuredImage, method, ingredients} = recipe.fields;
  console.log(recipe)
  return (
    <div>
      <div className={styles.banner}>
        <h1>{title}</h1>
        <Image src={`https:${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}/>
      </div>
      <div className={styles.info}>
        <p>Takes about {time} minutes to cook</p>
        <h3>Ingredients:</h3>
        <ul>
        {ingredients.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
        </ul>
      </div>
      <div className={styles.method}>
        <h3>Method:</h3>
          {documentToReactComponents(method)}
          {/* works with objects that have already been styling. will display them how they were on contentful */}
      </div>
    </div>
  )
}