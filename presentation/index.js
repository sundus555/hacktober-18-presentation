// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text textColor="tertiary" fit bold>
            Hacktoberfest Hack Day Kuwait 2018
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Today's Agenda</Heading>
          <List>
            <ListItem>Welcome!</ListItem>
            <ListItem>Who we are, why we are here</ListItem>
            <ListItem>Configuration and Setup</ListItem>
            <ListItem>First Pull Request!</ListItem>
            <ListItem>Go and Hack!</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>An open group focused on developing and mentoring programmers and developers of all skill levels.</Quote>
            <Cite>Our Mission</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading>Configuration and Setup</Heading>
          <List>
            <ListItem>Create a github.com account</ListItem>
            <ListItem>Download and setup git on your computer</ListItem>
            <ListItem>Signup to participate in Hacktober at hacktoberfest.digitalocean.com</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading>Contributing - Step 1</Heading>
          <List>
            <ListItem>Create your own copy <em>fork</em></ListItem>
            <ListItem>Download code on your computer <em>clone</em></ListItem>
            <ListItem>Track your changes by making a <em>branch</em></ListItem>
            <ListItem><em>commit</em> your local changes</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading>Contributing - Step 2</Heading>
          <List>
            <ListItem><em>pull</em> and update your local fork with work others have done</ListItem>
            <ListItem>Fix any <em>merge</em> issues</ListItem>
            <ListItem>Confirm your code didn't break anything by running any tests</ListItem>
            <ListItem>Write or update any documentation</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading>Contributing - Step 3</Heading>
          <List>
            <ListItem><em>push</em> changes to your fork, by creating a new branch</ListItem>
            <ListItem>Create a <em>pull request</em> against the original repository</ListItem>
            <ListItem>Wait till your pull request is approved / reviewed</ListItem>
            <ListItem>Your pull request is merged!</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
