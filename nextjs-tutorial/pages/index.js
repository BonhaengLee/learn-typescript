import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import itemList from "../src/component/itemList";

export default function Home() {
    const [list, setList] = useState([]);
    const API_URL =
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    function getData() {
        axios
            .get(API_URL)
            .then((res) => {
                console.log(res.data);
                setList(res.data);
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
    }, []);

    return (
        <div>
            <Head>
                <title>HOME | sjwsne </title>
            </Head>
            <itemList list={list} />
        </div>
    );
}
