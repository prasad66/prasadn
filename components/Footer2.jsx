import {
    FormEvent,
    memo,
    useRef,
    useState,
    SyntheticEvent,
    MouseEvent,
} from "react";
import {
    Container,
    Grid,
    Typography,
    Link,
    TextField,
    Button,
    Hidden,
    useTheme,
    Snackbar,
    IconButton,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import emailjs from '@emailjs/browser';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.type === "dark" ? "#091c34" : "#ccff90",
            paddingBottom: theme.spacing(5),
        },
        wave: {
            width: "100%",
            height: theme.spacing(50),
            [theme.breakpoints.down("md")]: {
                height: theme.spacing(25),
            },
        },
        left: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        leftContainer: {
            flexGrow: 1,
        },
        iconsGrid: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        socialItem: {
            display: "flex",
            alignItems: "center",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            "&:hover": {
                textDecoration: "none",
                color: theme.palette.secondary.light,
            },
        },
        illustrationContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        illustration: {
            width: "80%",
        },
        sendButton: {
            marginTop: theme.spacing(2),
        },
    })
);

const Footer2 = () => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("Sending...");
    const classes = useStyles();
    const theme = useTheme();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const form = useRef(null);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setOpen(true);

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_USER_ID)
            .then((result) => {
                console.log(result.text);
                setOpen(false);
                setMessage("Message Sent ✅");

                setOpen(true);
                nameRef.current.value = "";
                emailRef.current.value = "";
                messageRef.current.value = "";
            }, (error) => {
                console.log(error)
                setMessage("Error in sending ❌");
                setOpen(true);
            });
    }

    return (
        <footer className={classes.root}>
            <img
                className={classes.wave}
                src={
                    theme.palette.type === "dark"
                        ? "/assets/footer-wave-dark.svg"
                        : "/assets/footer-wave-light.svg"
                }
                alt="wave for styling and separating sections"
            />
            <Container id="contact">
                <Grid container>
                    <Grid item md={6} sm={12}>
                        <Typography variant="h3" align="left">
                            Connect with me
                        </Typography>
                        <article
                            itemScope
                            itemType="http://schema.org/Author"
                            className={classes.left}
                        >
                            <Grid container className={classes.leftContainer}>
                                <Grid item md={6} sm={6} className={classes.iconsGrid}>
                                    <Link
                                        className={classes.socialItem}
                                        href="https://github.com/prasad66"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                    >
                                        <GitHubIcon className={classes.icon} fontSize="large" />

                                        <Typography>Github</Typography>
                                    </Link>

                                    <Link
                                        className={classes.socialItem}
                                        href="https://www.linkedin.com/in/prasad0204/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                    >
                                        <LinkedInIcon className={classes.icon} fontSize="large" />

                                        <Typography>LinkedIn</Typography>
                                    </Link>

                                    <Link
                                        className={classes.socialItem}
                                        href="mailto:ndpk.prasad@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                    >
                                        <MailIcon fontSize="large" className={classes.icon} />
                                        <Typography>ndpk.prasad@gmail.com</Typography>
                                    </Link>
                                </Grid>

                                <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    className={classes.illustrationContainer}
                                >
                                    <Hidden xsDown>
                                        <img
                                            src="/assets/message.svg"
                                            className={classes.illustration}
                                            alt="message illustration"
                                        />
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </article>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Typography variant="h3" align="left">
                            Say Hi
                        </Typography>
                        <form ref={form} >
                            <TextField
                                label="Name"
                                fullWidth
                                margin="dense"
                                variant="outlined"
                                color="secondary"
                                inputRef={nameRef}
                                name="name"
                                required
                                id="form-name"
                            />
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                margin="dense"
                                variant="outlined"
                                color="secondary"
                                inputRef={emailRef}
                                name="email"
                                required
                                placeholder="So I can get back"
                                id="form-email"
                            />
                            <TextField
                                label="Message"
                                fullWidth
                                margin="dense"
                                multiline
                                rows={5}
                                variant="outlined"
                                color="secondary"
                                inputRef={messageRef}
                                name="message"
                                required
                                id="form-message"
                            />
                            <Button
                                variant="outlined"
                                className={classes.sendButton}
                                color="secondary"
                                endIcon={<SendIcon />}
                                type="submit"
                                onClick={(e) => handleFormSubmit(e)}
                            >
                                send
                            </Button>
                            <Snackbar
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                open={open}
                                autoHideDuration={1000}
                                onClose={handleClose}
                                message={message}
                                action={
                                    <>
                                        <IconButton
                                            size="small"
                                            aria-label="close"
                                            color="inherit"
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    </>
                                }
                            />
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer2