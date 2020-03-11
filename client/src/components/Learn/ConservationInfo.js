//"Polar Bears are considered vulnerable due to melting ice caps and lack of food due to seal hunting."

import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { ConservationWrapper } from "./InfoStyle"

const ConservationInfo = props => {
    return (
        <Col>
            <ConservationWrapper>
            <Card>
                <CardHeader>
                    <h1>Let's save the ocean</h1>
                </CardHeader>
                <CardBody>
                    <p1>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Ocean-Pollution.jpg`} alt="a picture of Ocean Pollution" />
                    </p1>
                    <p2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    Ocean conservation is a huge problem that our world is facing right now.  Pollutants including oil, septic sludge, dirt, and trash.  Thousands of tons of trash and waste are dumped in to the oceans everyday.  More than a million sea birds are killed due to pollution each year.  Discarded fishing nets kill hundreds of thousands of dolphins and porpoises every year.
                    Another problem that is destrying the ecosystems of the ocean, is over fishing.  More than 3 billion people rely on seafood as their primary source of protein. Due to this huge demand, many different species of fish have become decimated.  This leads to starvation of predators and in turn a breakdown of the ecosystem balance.  Coral reef are being destroyed by climate change, tourism, coral mining, and polution, which in turn kills the fish and other animals that use the reef as their home.

                    So what are some things we can do to help?  There are many online resources available to help you determine what seafood options are considered sustainable.  By choosing sustainable options, we help to maintain the marine life populations.  Another way we can help is by reduing our waste, in particular, plastic.
                    </p2>
                    <p3>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/turtlesinnet.jpg`} alt="picture of turtles stuck in a fishing net" />
                    </p3>                      
                </CardBody>
            </Card>
            </ConservationWrapper>
        </Col>
    )
}

export default ConservationInfo;