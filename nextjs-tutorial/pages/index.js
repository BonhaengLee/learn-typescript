import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ItemList from "../src/component/ItemList.js";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    function getData() {
        axios
            .get(API_URL)
            .then((res) => {
                console.log(res.data);
                setList(res.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
            });
    }

    useEffect(() => {
        getData();
        console.log(API_URL);
    }, []);

    return (
        <div>
            <Head>
                <title>HOME | sjwsne </title>
            </Head>
            <meta name="description" content="sdfasdf12e4124e123123"></meta>
            {isLoading && (
                <div style={{ padding: "300px 0" }}>
                    <Loader inline="centered" active>
                        Loading
                    </Loader>
                </div>
            )}
            {!isLoading && (
                <>
                    <Header as="h3" style={{ paddingTop: 40 }}>
                        베스트상품
                    </Header>
                    <Divider />
                    <ItemList list={list.slice(0, 9)} />
                    <Header as="h3" style={{ paddingTop: 40 }}>
                        신상품
                    </Header>
                    <Divider />
                    <ItemList list={list.slice(9)} />
                </>
            )}
        </div>
    );
}
