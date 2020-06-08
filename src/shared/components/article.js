import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import styles from '../custom-styles/articleStyles';

function Article({ classes, item }) {
    const share = `https://twitter.com/intent/tweet?text=${item.title}`;
    return (
        <Card className={`${classes.card} item`}>
         <img src={item.urlToImage} alt="" />
         <CardContent className={classes.content}>
           <Typography className={classes.heading} gutterBottom variant="headline" component="h2">
              {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
           </Typography>
           <Typography className={classes.span} component="span">
              by
              {item.source.name}
           </Typography>
           <Typography className={classes.p} component="p">
            {item.description.length > 150 ? `${item.description.slice(0, 150)}...` : item.description}
           </Typography>
         </CardContent>
         <CardActions className={classes.buttons}>
            <Button className={classes.button}>
               <a target="_blank" rel="noopener noreferrer" href={share}>
                <Icon className={classNames(classes.icon, 'fa fa-twitter')} />
               </a>
            </Button>
            <Button size="small" color="primary" className={classes.button}>
               <a target="_blank" rel="noopener noreferrer" href={item.url}>
                <Icon className={classNames(classes.icon, 'fa fa-angle-double-right')} />
               </a>
            </Button>
         </CardActions>
        </Card>
    );
}

Article.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    item: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
        description: PropTypes.string,
        urlToImage: PropTypes.string,
        source: PropTypes.instanceOf(Object),
    }).isRequired,
};

export default withStyles(styles)(Article);
