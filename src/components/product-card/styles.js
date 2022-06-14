import { makeStyles } from '@material-ui/core/styles';
import egyptian from '../../assets/egyptian-grain.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // backgroundImage: `url(${egyptian})`,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
