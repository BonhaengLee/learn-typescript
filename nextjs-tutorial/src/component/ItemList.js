import { Grid } from "semantic-ui-react";
import styles from "./itemList.module.css";
import Link from "next/link";

export default function ItemList({ list }) {
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => (
                        <Grid.Column key={item.id}>
                            <a href={`/view/${item.id}`}>ddd</a>
                            <Link href="/view/[id]" as={`/view/${item.id}`}>
                                <a>
                                    <div className={styles.wrap}>
                                        <img
                                            src={item.image_link}
                                            alt={item.name}
                                            className={styles.img_item}
                                        />
                                        <strong className={styles.tit_item}>
                                            {item.name}
                                        </strong>
                                        <span className={styles.txt_info}>
                                            {item.category} {item.product_type}
                                        </span>
                                        <strong className={styles.num_price}>
                                            ${item.price}
                                        </strong>
                                    </div>
                                </a>
                            </Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}

// @ : next/link > Link에서 a tag를 사용하는 이유 : a태그를 더 넣은 이유는 a태그를 사용하지 않았을때 검색엔진에서 링크를 못 찾을수도
