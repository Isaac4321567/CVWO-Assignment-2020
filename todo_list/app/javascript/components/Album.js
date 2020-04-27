import React from 'react';

import Select from 'react-select';

import AppBar from '@material-ui/core/AppBar';

import Button from '@material-ui/core/Button';

import Modal from '@material-ui/core/Modal';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';

import CardContent from '@material-ui/core/CardContent';

import CardMedia from '@material-ui/core/CardMedia';

import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import Link from '@material-ui/core/Link';

import Chip from '@material-ui/core/Chip';

import PropTypes from "prop-types"

import Backdrop from '@material-ui/core/Backdrop';

import { useSpring, animated } from 'react-spring/web.cjs';

import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';

import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  icon: {

    marginRight: theme.spacing(2),

  },

  heroContent: {

    backgroundColor: theme.palette.background.paper,

    padding: theme.spacing(8, 0, 6),

  },

  heroButtons: {

    marginTop: theme.spacing(4),

  },

  cardGrid: {

    paddingTop: theme.spacing(8),

    paddingBottom: theme.spacing(8),

  },

  card: {

    height: '100%',

    display: 'flex',

    flexDirection: 'column',

  },

  cardMedia: {

    paddingTop: '10%', // 16:9
    backgroundColor: theme.palette.warning.light,

  },

  cardContent: {

    flexGrow: 1,

  },

  footer: {

    backgroundColor: theme.palette.background.paper,

    padding: theme.spacing(6),

  },

  chipcontainer: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },

  shortchip: {
    fontSize: '140%',
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function Album(props) {



  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [route, setRoute] = React.useState('/tasks');

  const [method, setMethod] = React.useState('post');

  const [title, setTitle] = React.useState('');

  const [description, setDesc] = React.useState('');

  const [tags, setTags] = React.useState(['']);
  const [tag, setTag] = React.useState(['']);

  const handleChangeTags = (event) => {
    setTags(event);
    console.log(event);
    console.log(event[0]);
  }

  const handleChangeTag = (event) => {
    setTag(event);
  }

  const handleChangeTitle = event => {
    setTitle(event.target.value);

  };

  const handleChangeDesc = event => {
    setDesc(event.target.value);
  };

  const handleDefaultOpen = () => {
    setTitle('');
    setDesc('');
    setMethod('post');
    setRoute('/tasks');

    setOpen(true);
  }

  const handleEditOpen = (id, title, desc) => {
    setTitle(title);
    setDesc(desc);
    setMethod('patch');
    setRoute('/tasks/' + id);

    setOpen(true);
  }


  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleDeleteTask = (task_id) => {
    console.log(task_id);
    $.ajax({
      url: '/tasks/' + task_id + "/?&authenticity_token=" + encodeURIComponent(props.authenticity_token),
      type: "DELETE",
      dataType: "json",
      success: () => { window.location.reload(false); },
      error: () => {window.location.reload(false);}
    });

   // window.location.reload(false);
 }

  const handleDelete = () => {};

  return (

    <React.Fragment>

      <CssBaseline />

      <AppBar position="relative">

        <Toolbar>

	  <Link href="https://github.com/Isaac4321567/CVWO-Assignment-2020" color="inherit">
          <Typography variant="h6" color="inherit" noWrap>

            CVWO 2020

          </Typography>
	  </Link>
        </Toolbar>

      </AppBar>

      <main>

        {/* Hero unit */}

        <div className={classes.heroContent}>

          <Container maxWidth="sm">

            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>

              Todo List

            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>

              A simple To-do app developed using Material-UI Album react component template

            </Typography>

            <div className={classes.heroButtons}>

              <Grid container spacing={2} justify="center">

                <Grid item>

                  <Button variant="contained" color="primary" onClick={handleDefaultOpen}>

                    Add a Todo

                  </Button>

		  <Modal
		    aria-labelledby="spring-modal-title"
		    aria-describedby="spring-modal-description"
        	    className={classes.modal}
        	    open={open}
        	    onClose={handleClose}
        	    closeAfterTransition
        	    BackdropComponent={Backdrop}
        	    BackdropProps={{
          	       timeout: 500,
        	    }}
      		  >
        	    <Fade in={open}>
          		<div className={classes.paper}>
            		    <form className={classes.root} noValidate autoComplete='off' action={route} method='post'>
				<FormControl>
				    <InputLabel htmlFor="component-simple">Title</InputLabel>
				    <Input id="component-simple" name="task[title]" value={title} onChange={handleChangeTitle} label="Title" fullWidth/>
				</FormControl>
				<br />
				<FormControl>
				    <InputLabel htmlFor="component-simple-area">Description</InputLabel>
				    <Input id="component-simple-area" name="task[description]" value={description} onChange={handleChangeDesc} fullWidth multiline rows="3" rowsMax="4"/>
          			</FormControl>
				<br />

				<FormControl>
				<Select
				    value={tags}
				    name="task[tag_ids][]"
				    options={props.tags.map(tag=>({label: tag.name, value: tag.id}))}
				    onChange={handleChangeTags}
				    isMulti
				    className="basic-multi-select"
				    fullWidth
				/>
				</FormControl>
			    	<br />
				<input type='hidden' name='authenticity_token' value={props.authenticity_token} />
				{method == "patch" &&
				    <input type='hidden' name='_method' value='patch' />
				}
			        <input type="submit" value="Submit" />
			   </form>

			</div>
		    </Fade>
      		</Modal>

		</Grid>

                <Grid item>

		  <form className={classes.root} noValidate autoComplete='off' action="/" method='get'>

			<FormControl>
			    <Select
				value={tag}
			        name="tag"
		       	        options={props.tags.map(tag=>({label: tag.name, value: tag.id}))}
				onChange={handleChangeTag}
				className="basic-single"
				autosize
				/>
			</FormControl>
		        <input type="submit" value="Submit" />

    	          </form>
                </Grid>

              </Grid>

            </div>

          </Container>

        </div>

        <Container className={classes.cardGrid} maxWidth="md">

          {/* End hero unit */}

          <Grid container spacing={4}>

            {props.tasktags.map(task => (

              <Grid item key={task[0].id} xs={12} sm={6} md={4}>

                <Card className={classes.card}>

                  <CardMedia

                    className={classes.cardMedia}
		    src="javascript:void(0)"

                  />

                  <CardContent className={classes.cardContent}>

                    <Typography gutterBottom variant="h5" component="h2">

                      {task[0].title}

                    </Typography>

                    <Typography>

                      {task[0].description}

                    </Typography>

                  </CardContent>

                  <CardActions>

                    <Button size="small" color="primary" onClick = {() => {handleEditOpen(task[0].id, task[0].title, task[0].description)}}>

                      Edit

                    </Button>

                    <Button size="small" color="primary" onClick={() => {handleDeleteTask(task[0].id)}}>

                      Delete

                    </Button>

                  </CardActions>

		  <div className={classes.chipcontainer}>
		  <Select
		     className="basic-multi-select"
		     isMulti
		     isDisabled
		     autosize={true}
		     value={task[1].map(tag=>({label: tag.name, value: tag.id}))}
		  />
		  {console.log(task[0])}
		  {console.log()}
		  </div>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </main>

      {/* Footer */}

      <footer className={classes.footer}>

        <Typography variant="h6" align="center" gutterBottom>

          Footer

        </Typography>

        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">

          Something here to give the footer a purpose!

        </Typography>


      </footer>

      {/* End footer */}

    </React.Fragment>

  );


}

Album.propTypes= {
  tasks: PropTypes.array,
  authenticity_token: PropTypes.string
};

export default Album
