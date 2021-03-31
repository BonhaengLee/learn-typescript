import React from "react";

export default function itemList({ list }) {
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => {
                        <Grid.Column>
                            <img src={item.image_link} alt={item.name} />
                        </Grid.Column>;
                    })}
                </Grid.Row>
            </Grid>
        </div>
    );
}
