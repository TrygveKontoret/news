import {wrapper} from './article.module.scss'

const Article = (props) => {
    const {titletext, bodytext, authortext} = props;
    return (
        <div className={wrapper}>
            <h2>{titletext}</h2>
            <p>{bodytext}</p>
            <span>Author: {authortext}</span>
        </div>
    )
}

export default Article
