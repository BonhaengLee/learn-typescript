import axios from "axios";
import Head from "next/head";
import Item from "../../src/component/Item";

const Post = ({ item }) => {
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
                    <Item item={item} />
                </>
            )}
        </>
    );
};

export default Post;

export async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
        },
    };
}

// @ : getServerSideProps를 사용해야 하는 이유
// 처음에는 문서를 보고 getStaticProps를 사용했었는데, 이렇게 하니 두 가지 문제가 있었다.

// 1. product/[id] 페이지에 필요한 데이터가 손실되었을 경우 빌드 시에 에러가 난다.
// 2. 어드민에서 상품을 등록하더라도 빌드해주지 않으면 등록한 상품이 반영되지 않는다.(상품을 등록할 때마다 배포해줘야 한다.)

// getServerSideProps를 사용하면 1번과 같은 경우에도 빌드는 가능하지만, 해당 페이지는 흰 화면으로 나타난다. 1번은 getServerSideProps를 사용한다고 해서 해결되는 문제는 아니지만, 덜 심각해 보인다. (물론 따로 처리는 해줘야 한다.)

// 2번의 이유로 서버사이드에서 데이터를 호출하는 방식을 사용해야 하는데, 상품 등록 시마다 빌드를 해줘야 한다면 어드민을 둠으로써 얻을 수 있는 편리함이 줄어들 게 된다. 그러므로 데이터의 추가/수정 작업이 있을 경우에는 getServerSideProps를 사용해야 하지만, 데이터가 추가될 일이 거의 없다거나 한다면 getStaticProps를 사용해서 동적 라우팅할 수도 있다.

// @ : 요약:

// - getStaticProps: static data를 위해 data fetching

// - getServerSideProps: ssr을 위해 data fetching

// - getStaticProps와 getServerSideProps의 차이는 빌드이후에도 data 변경가능 여부입니다.
