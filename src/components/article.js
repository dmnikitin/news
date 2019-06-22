import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';

//from where article

const styles = {
    card: {
        maxWidth: "100%",
        height: "auto",
        marginBottom: 30,
        display: "grid",
        backgroundSize: "cover",
        backgroundPosition: 'center center',
        gridTemplateRows: " auto  auto 55px"
    },
    media: {

    },
    content: {
        display: "grid",
        gridTemplateRows: "minmax(min-content, 100px) minmax(min-content, 100px)",

    },
    buttons: {
        color: "black",
        fontSize: 18

    }
};

const Article = props => {
    const { classes } = props;
    const share = `https://twitter.com/intent/tweet?text=${ props.item.title}`
    return (
        <Card className={classes.card}>

          <img src={props.item.urlToImage} alt=""/>

          <CardContent  className={classes.content}>
            <Typography className={classes.heading} gutterBottom variant="h5" component="h2">
               {props.item.title}
            </Typography>
            <Typography component="p">
             {props.item.description}
            </Typography>
          </CardContent>

          <CardActions className={classes.buttons}>
             <Button className={classes.button}>
                <a target="_blank" href={share}> <Icon className={classNames(classes.icon, 'fa fa-twitter')} />                </a>
             </Button>
             <Button size="small" color="primary">
                <a target="_blank" href={props.item.url}> Learn More</a>
             </Button>
          </CardActions>
        </Card>
    );
}


export default withStyles(styles)(Article);
