
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
}));

export default styles;
