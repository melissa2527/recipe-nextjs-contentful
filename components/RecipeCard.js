import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './RecipeCard.module.scss'

const RecipeCard = ({recipe}) => {
    const {title, slug, time, thumbnail} = recipe.fields
    return (
        <div className={styles.card}>
            <div className={styles.featured_img}>
                <Image src={`https:${thumbnail.fields.file.url}`} 
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h4>{title}</h4>
                    <p>Cooking Time: {time} minutes</p>
                </div>
                <div className={styles.actions}>
                    <Link href={`/recipes/${slug}`}><a>Cook This</a></Link>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
