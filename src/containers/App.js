import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import Entries from '../components/Entries.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import {Data} from '../Data.js';



class App extends Component {
    constructor(){
        super()
        this.state = {
            mahasiswa : [],
            searchField : '',
        }
    }
    componentDidMount() {
        this.setState({mahasiswa : Data});
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value});
    }
    render(){
        const { mahasiswa, searchField } = this.state;
        const filteredMhs = mahasiswa.filter(person => {
            return person.Nama.toLowerCase().includes(searchField.toLowerCase());
        })
        if (mahasiswa.length===0){
            return <h1 className='tc'>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Database TC'20</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList mahasiswa={filteredMhs}/>
                        </ErrorBoundry>
                    </Scroll>
                    <Entries entries={filteredMhs.length}/>
                    
                </div>
            );
        }
    };
}

export default App;