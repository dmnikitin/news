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

const styles = {
    card: {
        maxWidth: '100%',
        height: 'auto',
        marginBottom: 30,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'inline-block',

    },
    heading: {
        overflow: 'hidden',
    },
    buttons: {
        color: 'black',
        fontSize: 18,
        minHeight: '40px',
        maxHeight: '40px',
    },
    span: {
        alignItems: 'center',
        fontStyle: 'italic',
        fontSize: '15px',
    },
    p: {
        marginTop: '10px',
    },
    content: {
        display: 'grid',
    },
};

function Article(props) {
    const { classes, item } = props;
    const share = `https://twitter.com/intent/tweet?text=${item.title}`;

    return (
        <Card className={classes.card}>
         <img src={item.urlToImage} alt="" />
         <CardContent>
           <Typography className={classes.heading} gutterBottom variant="headline" component="h2">
              {item.title}
           </Typography>
           <Typography className={classes.span} component="span">
              by
              {item.source.name}
           </Typography>
           <Typography className={classes.p} component="p">
            {item.description}
           </Typography>
         </CardContent>
         <CardActions className={classes.buttons}>
            <Button className={classes.button}>
               <a target="_blank" rel="noopener noreferrer" href={share}>
                <Icon className={classNames(classes.icon, 'fa fa-twitter')} />
               </a>
            </Button>
            <Button size="small" color="primary">
               <a target="_blank" rel="noopener noreferrer" href={item.url}>Learn More</a>
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
