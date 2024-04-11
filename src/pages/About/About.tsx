import React from "react"
import styled from "styled-components"
import { BREAKPOINT_MIN_WIDTH } from "../../assets/styles/Breakpoints"
import author from "../../assets/images/author.png"
import AboutHeading from "./AboutHeading"

const About = () => {
  return (
    <Section>
      <div className="section">
        <HeadingWrapper>
          <h1>Hi, I'm Jergie👋🏻</h1>
          <h1 className="flex-">Frontend Developer,</h1>
          <AboutHeading />
          <img src={author} alt="owner" loading="lazy" />
        </HeadingWrapper>
        <Content>
          <p>
            I’m Jergie. A passionate and driven Frontend Developer with a
            Vocational College diploma focused on Frontend Web Development from
            Stockholm, Sweden. I design and build web and server-side
            applications with React(Next), Vue, JavaScript, NodeJs, and other
            libraries and frameworks. I also have professional experience and
            basic knowledge of Laravel PHP, AWS, and .NET.
          </p>
          <p>
            I am naturally curious and always eager to learn new things to
            improve my skills. If you have any job offers or recommendations,
            feel free to message me. I have gained valuable experience from my
            previous internships and my current role and I am committed to
            bringing that experience into any new opportunity.
          </p>
        </Content>
      </div>
    </Section>
  )
}

export default About

const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    rgba(114, 128, 237, 0.9),
    rgba(77, 101, 233, 0.9)
  );
  position: relative;
`
const HeadingWrapper = styled.div`
  background-color: rgb(255, 247, 237);
  background-image: radial-gradient(
      at 36% 120%,
      rgb(254, 249, 195) 0px,
      transparent 50%
    ),
    radial-gradient(at 73% 72%, rgb(255, 229, 238) 0px, transparent 50%),
    radial-gradient(at 80% 100%, rgb(255, 229, 238) 0px, transparent 50%),
    radial-gradient(at 43% 56%, rgb(255, 199, 219) 0px, transparent 50%);
  content: "";
  clip-path: polygon(0% 0%, 100% 0px, 100% 84%, 50% 90%, 0px 84%);
  padding: 4rem 0;
  color: rgb(86, 112, 222);
  position: absolute;
  top: -1px;
  width: 100%;
  left: 0;
  img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
  h1 {
    text-align: center;
    font-family: var(--font-secondary);
    font-weight: 700;
    letter-spacing: 0.2px;
    color: var(--blue-violet-300);
    font-size: 30px;
    line-height: 2.5rem;
  }
  .flex {
    display: flex;
    gap: 1.5rem;
  }
  ${BREAKPOINT_MIN_WIDTH[2]} {
    clip-path: polygon(0% 0%, 100% 0px, 100% 86%, 50% 100%, 0px 86%);
    padding-top: 5rem;
    img {
      width: 12rem;
      height: 12rem;
    }
    h1 {
      font-size: 34px;
      letter-spacing: 0.3px;
      line-height: 3rem;
    }
  }
`
export const Content = styled.div`
  padding: 0 0 8rem 0;
  margin: 25rem auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  gap: 1rem;

  p {
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    color: var(--white-color);
  }
  p:last-child {
    margin-top: 0.5rem;
  }

  ${BREAKPOINT_MIN_WIDTH[2]} {
    padding: 6rem 0 9rem 0;
    max-width: 45rem;
  }
  ${BREAKPOINT_MIN_WIDTH[4]} {
    p {
      font-size: 1.1rem;
    }
    max-width: 50rem;
    padding-bottom: 12rem;
  }
`
