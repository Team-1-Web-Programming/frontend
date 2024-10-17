export const dummyHTMLString = `  <h4>Random Long HTML Example</h4>
        
        <div class="container">
          <div class="column">
            <p>Random paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ${Math.random()
              .toString(36)
              .substring(7)}</p>
            <p class="highlight">Random highlighted text: Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.</p>
            <ul>
              <li>Random list item 1</li>
              <li>Random list item 2</li>
              <li>Random list item 3</li>
              <li>Random list item 4</li>
            </ul>
          </div>

          <div class="column">
            <img src="https://via.placeholder.com/150" alt="Random image">
            <img src="https://via.placeholder.com/150" alt="Random image 2">
            <p>Random image description: ${Math.random()
              .toString(36)
              .substring(7)} - Some more random text to accompany the image.</p>
          </div>
        </div>

        <h4>Random Table</h4>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Random data ${Math.floor(Math.random() * 100)}</td>
              <td>${Math.random().toString(36).substring(7)}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Random data ${Math.floor(Math.random() * 100)}</td>
              <td>${Math.random().toString(36).substring(7)}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Random data ${Math.floor(Math.random() * 100)}</td>
              <td>${Math.random().toString(36).substring(7)}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <a href="/">RANDOM LINK CAREFUL!</a>
        <br />
        <br />
        <h4>Random Button</h4>
        <button onclick="alert('You clicked the random button!')">Click Me!</button>

        <h4>Another Random Section</h4>
        <p>Random paragraph 2: Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. ${Math.random()
          .toString(36)
          .substring(7)}</p>
        <p>Random paragraph 3: Etiam ut purus mattis mauris sodales aliquam. Curabitur nisi. ${Math.random()
          .toString(36)
          .substring(7)}</p>
`;

export default function RenderHTML({htmlString = dummyHTMLString}) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
