import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  `
export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin-top: -5%;

  .home-bg-img {
    max-height: 60rem;
  }
`
export const HomeForm = styled.form`
  width: 36rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .enter-section {
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--black);
      font-size: 2.8rem;
      font-weight: bold;
    }

    input {
      border: 0.1rem solid #a1b2cd80;
      border-radius: 0.8rem;
      padding: 1rem;
      margin-top: 2.4rem;
    }

    button {
      background: var(--blue);
      color: white;
      border: none;
      border-radius: 0.8rem;
      padding: 1rem 0;
      margin-top: 1.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.4rem;

      &:active {
        scale: 98%;
      }

      .icon {
        font-size: 1.5rem;
      }
    }
  }

  .diviser {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: var(--grey);
      font-size: 1.6rem;
      font-weight: 400;
      padding: 0 1rem;
    }

    span {
      width: 100%;
      background-color: #e5e5e5;
      height: 0.1rem;
    }
  }

  .create-section {
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--black);
      font-size: 2.8rem;
      font-weight: bold;
    }

    a {
      color: white;
      background: var(--blue);
      border: none;
      border-radius: 0.8rem;
      padding: 1rem 0;
      font-size: 1.4rem;
      margin-top: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;

      .icon {
        font-size: 1.5rem;
      }

      &:active {
        scale: 98%;
      }
    }
  }
`
