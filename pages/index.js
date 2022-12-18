import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-utils";

// const DUMMY_POSTS = [
//     {
//         title: "Leia and Han’s Honeymoon Is A Book!",
//         image: "the-princess-and-the-scoundrel.jpg",
//         excerpt: "Star Wars: The Princess and the Scoundrel by Beth Revis (Rebel Rising) is out now! Sarah Woloski and Tricia Barr dive into the worldbuilding and character arcs of princess Leia Organa and scoundrel Han Solo after the events of Return of the Jedi.",
//         date: "2022-11-26",
//         slug: "the-princess-and-the-scoundrel"
//     },
//     {
//         title: "Leia, Princess of Alderaan Review",
//         image: "leia-princess-of-alderaan-book-cover.jpg",
//         excerpt: "Leia, Princess of Alderaan by Claudia Gray connects possibly the most threads and sows the most seeds of any Star Wars book in the new canon so far.",
//         date: "2022-11-26",
//         slug: "leia-princess-of-alderaan-book-cover"
//     }
// ];

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Leia&apos;s blog</title>
                <meta name="description" content="I post about everything" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;
