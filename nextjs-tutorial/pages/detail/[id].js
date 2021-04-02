import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
    const router = useRouter();

    console.log(router.isFallback);

    return (
        <>
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta
                            name="description"
                            content={item.description}
                        ></meta>
                    </Head>
                    {name} 환경 입니다.
                    <Item item={item} />
                </>
            )}
        </>
    );
};

export default Post;

// @ : Page 에서 동적 경로 값 가져오기
// getStaticPaths 에서 설정한 페이지 값을 빌드 시점에, getStaticProps(context) 로 경로 값을 가져올 수 있다.
// { params: {'id': '100'} }
export async function getStaticPaths() {
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        // paths: [
        //     { params: { id: "740" } },
        //     { params: { id: "730" } },
        //     { params: { id: "729" } },
        // ],
        paths: data.slice(0, 9).map((item) => ({
            params: {
                id: item.id.toString(),
            },
        })),
        fallback: true,
        // @ : fallback) false => 다른 페이지는 404 에러,
        // @ : true => 빈 화면(흰 페이지)에서 백그라운드로 정적 파일을 생성하여 html이 json파일을 생성해준다.
        // @ : Nextjs가 프리렌더링 목록에 추가해주고 두 번째 접속 때부터는 정적 생성된 페이지를 사용한다.
        // @ : .next/server/pages/detail 에 쿨락헌 id의 html,json이 추가된 것을 볼 수 있다.
        // @ : + Nextjs의 Link를 사용하면 prefetch 속성이 있어서 스크롤하면서 화면에 보이는 항목들은 프리렌더링에 추가된다.(html, json 추가)
        // NOTE: getStaticPaths에서 리턴되는 paths는 빌드타임에 HTML이 렌더링 된다. 여기서 생성되지 않는 예외 Path들은 404 페이지를 리턴하지 않는다. 대신, NextJs는 fallback page를 보여주게 된다 => router.isFallback으로 체크하여 로딩 화면을 구성
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name,
        },
    };
}
