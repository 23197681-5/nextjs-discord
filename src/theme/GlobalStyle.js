export default  function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
            backgorund-color: black;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        .container :hover {
          float: left;
          width: 600px;
          height: 900px;
          overflow: hidden;
          margin: 0 50px;
          color: white;
          font-size: 13px;
          padding: 10px;
          background: url(../images/pan.jpg) top left no-repeat;
          background-size: 100% 100%;
          /*declare shape using the shape function circle()*/
          shape-inside: polygon(
            5.67px 224px,
            396.33px 399px,
            394.67px 2.53px,
            4.33px 159.53px
          );
        }
        .container {
          float: left;
          width: 600px;
          height: 90px;
          overflow: hidden;
          margin: 0 50px;
          color: black;
          font-size: 13px;
          padding: 10px;
          background: url(../images/pan.jpg) top left no-repeat;
          background-size: 100% 100%;
          /*declare shape using the shape function circle()*/
        }
        
        body {
          font-family: "Open Sans", sans-serif;
          background-color: black;
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