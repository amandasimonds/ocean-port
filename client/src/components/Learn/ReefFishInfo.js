import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { ReefFishWrapper } from "./InfoStyle"

const ReefFishInfo = props => {
    return (
        <Col>
            <ReefFishWrapper>
            <Card>
                <CardHeader>
                    <h1>Let's learn about Coral Reefs and the fish that live there!</h1>
                </CardHeader>
                <CardBody>
                    <p1>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/reef.jpg`} alt="a picture of a coarl reef" />
                    </p1>
                    <p2>
                        <br></br>
                    A coral reef is a collection of living coral that form a community that build on rocks in warm, shallow waters.  The coral connect to each other using calcium carbonite, similar to calcium found in our bones.  Coral live off of the energy from algea that live inside of their polyps. The algea use sun for their energy and food.  You can think of coral reefs as the rainforests of the ocean.  25% or 1/4 of the animals that live in the ocean, live on a coral reef.  Reefs provide a home, not only to coral but also fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates and other cnidarians.
                    </p2>
                    <p3>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blacktailbutterfly.jpg`} alt="picture of a blacktailbutterfly fish" />
                    </p3>
                    <p2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    Let's explore the fish that live on the reef!  One type of fish that lives on coral reefs are butterfly fish, there are over 100 different species.  These beautiful fish are called blacktail butterfly, and they are native to the Red Sea and in the Mediterranean off the coast of Israel.  Adults generally live in pairs are patrol a particular territory, while the younger fish live in the coral branches and are not territorial.  They eat coral polyps and sea anemone tentacles.
                    </p2>
                    <p1>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/maskedbutterflyfish.jpg`} alt="picture of a masked butterfly fish" />
                    </p1>
                    <p2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    The masked butterfly fish, also known as bluecheek butterfly, is also found in the Red Sea and one of the larger species of butterfly fish.  Masked butterfly fish are one of the few species of fish that mate for life.  They eat hard corals and benthic invertebrates, which are like sea worms.
                    </p2>
                    <p3>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blackwedgebutterfly.jpg`} alt="picture of a blackwedge butterfly fish" />
                    </p3>
                    <p2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    Blackwedge butterfly fish are found mostly in the Idian Ocean, from eastern Africa all the way to Indonesia.  They can grow to be almost 8 inches long.  They are found on the edges of reef in the currents.  They eat mostly invertebrates.
                    </p2>
                    <p1>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/triggerfish.jpg`} alt="picture of a triggerfish" />
                    </p1>
                    <p2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    Triggerfish make up about 40 species of brightly colored fish usually with lines and spots. Mostly living in the Indo-Pacific in coastal habitats, and coral reefs. Triggerfish can grow up to 20 inches long. Triggerfish eat shellfish, so they have small strong jaws with teeth shaped for crushing.
                    </p2>
                </CardBody>
            </Card>
            </ReefFishWrapper>
        </Col>
    )
}

export default ReefFishInfo;