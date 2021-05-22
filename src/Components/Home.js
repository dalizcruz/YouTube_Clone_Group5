import axios from 'axios';
import { Component } from 'react';

class Home extends Component {
    state = {input: "", video: {} }
    
    handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const { input } = this.state;
            debugger
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
            debugger
            this.setState({video: res.data });
        }catch (err) {
            this.setState({video: {} });
        }
        this.setState({input: ""});
    };

    handleChange = async (e) => {
        this.setState({input: e.target.value});
    };

    render() {
        const { input, video } = this.state; 
        return(
           <section>
               <form>
               <input type="text" value={input} onChange={this.handleChange} placeholder="Search..." />
               <button type="submit">Search</button>
              </form>

              <div>
                  <li>
                      {video}
                  </li>
              </div>
           </section>
        )
    }
}

export default Home;