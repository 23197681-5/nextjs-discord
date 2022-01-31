import appConfig from "../config.json";
function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}
function PageTitle(props) {
  console.log(props);
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          ${appConfig.theme.colors};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
function HomePage() {
  return (
    <div>
      <PageTitle tag="h2">Welcome!</PageTitle>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
}
export default HomePage;
