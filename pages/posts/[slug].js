import { Fragment } from "react";
import Head from "next/head";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-utils";

function PostDetailsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post}/>
        </Fragment>
        );
}

export function getStaticProps(context) {
    const { params: { slug } } = context;
    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postsFileNames = getPostsFiles();
    const slugs = postsFileNames.map(fileName => fileName.replace(/\.md$/, ""));

    return {
        paths: slugs.map(slug => ({ params: { slug }})),
        fallback: false
    }
}

export default PostDetailsPage;
