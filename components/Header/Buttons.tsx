import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
import CodeIcon from "@material-ui/icons/Code";
import { Box, IconButton, Link, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import NextLink from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bigButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "48%",
        marginRight: theme.spacing(0),
      },
    },
    bigButtonsContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  })
);

function Buttons() {
  const classes = useStyles();
  return (
    <>
      <Box mx={-1}>
        <Link
          href="https://github.com/prasad66"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github profile"
            aria-haspopup="true"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/in/prasad0204/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github repository link"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>
      <Box className={classes.bigButtonsContainer} mt={2}>
        <NextLink href="https://drive.google.com/file/d/1muqsSZUAwdZxYRV6BJ24Yutx0spKDfbt/view?usp=sharing">
          <Button
            component="a"
            variant="contained"
            color="secondary"
            className={classes.bigButton}
            startIcon={<DescriptionIcon />}
            href="https://drive.google.com/file/d/1muqsSZUAwdZxYRV6BJ24Yutx0spKDfbt/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
        </NextLink>
        <NextLink href="/projects">
          <Button
            component="a"
            variant="outlined"
            color="secondary"
            className={classes.bigButton}
            startIcon={<CodeIcon />}
            href="/projects"
          >
            See my work
          </Button>
        </NextLink>
      </Box>
    </>
  );
}

export default Buttons;
