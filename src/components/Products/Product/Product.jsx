import React from 'react'
import { Card, CardMedia , CardContent , CardActions, Typography ,IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

import useStyles from './styles'
const Product = ({product}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} >
                <CardMedia className={classes.media} img="" title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>{product.name}</Typography>
                        <Typography variant="h5" >{product.price}</Typography>
                   
                    </div>
                    <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Card">
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
           
            </Card>
        </div>
    )
}

export default Product
