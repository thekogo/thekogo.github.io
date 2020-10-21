import React from 'react'
import styled from 'styled-components'

export default function Basic() {

    // Getting Started
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    // Adapting based on props
    const Button = styled.button`
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    `;

    // Extending Styles
    const Button2 = styled.button`
        color: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    `;

    const TomatoButton = styled(Button2)`
        color: tomato;
        border-color: tomato;
    `;

    const ReversedButton = props => <Button2 {...props}
        children={props.children.split('').reverse().join('')}
    />

    // Styling any component
    const Link = ({ className, children }) => (
        <a className={className}>{children}</a>
    )

    const StyledLink = styled(Link)`
        color: palevioletred;
        font-weight: bold;
    `;

    // Passed props
    const Input = styled.input`
        padding: 0.5em;
        margin: 0.5em;
        color: ${props => props.inputColor || "palevioletred"};
        background: papayawhip;
        border: none;
        border-radius: 3px;
  `;

    // Pseudoelements, pseudoselectors, and nesting
    const Thing = styled.div.attrs(() => ({
        tabIndex: 0
    }))`
        color: blue;

        &:hover {
            color: red
        }

        & ~ & {
            background: tomato;
        }

        & + & {
            background: line;
        }

        &.something {
            background-color: orange;
        }

        .something-else & {
            border: 1px solid;
        }
    `
    return (
        <div>
            {/* Getting Start */}
            <Wrapper>
                <Title>Hello Style Component</Title>
            </Wrapper>

            <br />
            {/* Adapting based on props */}
            <Button>Normal</Button>
            <Button primary>Primary</Button>

            <br />
            {/* Extending Styles */}
            <Button2>Normal</Button2>
            <TomatoButton>Tomato Button</TomatoButton>
            <Button2 as="a" href="/">Link with Button styles</Button2>
            <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
            <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>

            <br />
            {/* Styling any component */}
            <Link>Unstyled, boring Link</Link>
            <br />
            <StyledLink>Styled, exciting Link</StyledLink>

            <br />
            {/* Passed props */}
            <Input defaultValue="@probablyup" type="text" />
            <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />

            <br />
            {/* Pseudoelements, pseudoselectors, and nesting */}
            <Thing>Hello</Thing>
            <Thing>Sibling of div</Thing>
            <div>this is div</div>
            <Thing className="something">Class something</Thing>
            <Thing>Thing next of thing</Thing>
            <Thing>This is thing</Thing>
            <div className="something-else">
                <Thing>This is thing inside div</Thing>
            </div>
            
            <br />
            
        </div>
    )
}
