import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    // ScrollAnimation wraps img + span in its own div
    & > div{
      position: relative;
      display: flex;
      justify-content: center;
    }

    img{
      width: 3.4rem;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s;
    }

    span{
      position: absolute;
      bottom: calc(100% + 1.2rem);
      left: 50%;
      padding: 0.5rem 1.2rem;
      border-radius: 0.8rem;
      background: linear-gradient(135deg, var(--green), #1a9e52);
      box-shadow: 0 0.6rem 1.6rem rgba(35, 206, 107, 0.35);
      color: #FFFF;
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.05rem;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translate(-50%, 0.8rem) scale(0.6);
      transform-origin: bottom center;
      transition: opacity 0.2s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

      // small arrow pointing at the icon
      &::after{
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 0.5rem solid transparent;
        border-top-color: #1fb55e;
      }
    }

    &:hover{
      img{
        transform: translateY(-0.4rem) scale(1.15);
        filter: drop-shadow(0 0.4rem 0.8rem rgba(35, 206, 107, 0.4));
      }

      span{
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
      }
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`