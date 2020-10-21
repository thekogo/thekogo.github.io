import React, { Component } from 'react'
import data from './data.json'

export default class SearchFilter extends Component {

    state = {
        itemsToDisplay: [],
        itemsToUse: [],
        cuisines: []
    }

    render() {
        return (
            <div>
                <div className="restfilter">
                    <div>
                        Choose a cuisine : &nbsp;
                        <select id="restfilter" onChange={this.optionSelect}>
                            <option value="any">Choose Any</option>
                            {this.state.cuisines.map(cuisine => <option value={cuisine}>{cuisine}</option>)}
                        </select>
                    </div>
                    <div>
                        Sort by : &nbsp;
                        <select id="sortfilter" onChange={this.sortBy}>
                            <option value="ranking" >Ranking</option>
                            <option value="asc" >Rating: Low to High</option>
                            <option value="des" >Rating: High to Low</option>
                        </select>
                    </div>
                </div> {/* end restfilter */}

                <div className="restcontainer">
                    {this.state.itemsToDisplay.map(rest => {
                        let cuisines = rest["Cuisine Style"].substring(1, rest["Cuisine Style"].length - 2).split(',');
                        return (
                            <div className="rest">
                                <div className="restinfo">
                                    <i className="fas fa-map-marker" style={{ fontSize: '12px', color: 'orangered' }}></i> &nbsp;
                                    <span className="restcity">{rest["City"]}</span>
                                    <span className="restname">{rest["Name"]}</span>
                                    <br />
                                    <div className="restcuisines">
                                        {cuisines.map(cuisine => {
                                            let cuisineShow = cuisine.substring(1, cuisine.length - 1);
                                            cuisineShow = cuisineShow.includes("'") ? cuisineShow.substring(1, cuisineShow.length - 1) : cuisineShow;
                                            return (
                                                <div pill className="restcuisine" variant="light">{cuisineShow}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="sepline"></div>
                                <div className="reststats">
                                    <div>
                                        <i style={{ fontSize: "15px" }} className="far fa-comment-alt"></i>&nbsp;
                                        {rest["Rating"]}
                                    </div>
                                </div>

                            </div>
                            // end rest info
                        )
                    })}
                </div>
            </div>
        )
    }

    filterOnSearch = event => {
        if (
            !event.target.value ||
            event.target.value === " " ||
            event.target.value === ""
        ) {
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] })
        } else {
            let itemsToDisplay = [];
            itemsToDisplay = this.state.itemsToUse.filter(item => (
                item["Name"].toLowerCase().includes(event.target.value.toLowerCase()) ||
                item["Cuisine Style"].toLowerCase().includes(event.target.value.toLowerCase()) ||
                item["City"].toLowerCase().includes(event.target.value.toLowerCase())
            ))
            this.setState({ itemsToDisplay })
        }
    }

    optionSelect = () => {
        const e = document.getElementById("restfilter");
        const selected = e.options[e.selectedIndex].text;

        if (selected === "Choose Any") {
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] })
        } else {
            let itemsToDisplay = [];
            itemsToDisplay = this.state.itemsToUse.filter(item => (
                item["Cuisine Style"].toLowerCase().includes(selected.toLowerCase())
            ))
            this.setState({ itemsToDisplay });
        }
    }

    sortBy = () => {
        const e = document.getElementById("sortfilter");
        const selected = e.options[e.selectedIndex].value;

        if (selected === "ranking") {
            this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
        } else if (selected === "asc") {
            let itemsToDisplay = [...this.state.itemsToDisplay];
            itemsToDisplay.sort((a, b) => {
                return a["Rating"] - b["Rating"];
            })
            this.setState({ itemsToDisplay })
        } else {
            let itemsToDisplay = [...this.state.itemsToDisplay];
            itemsToDisplay.sort((a, b) => {
                return b["Rating"] - a["Rating"]
            })
            this.setState({itemsToDisplay})
        }
    }

    componentDidMount() {
        this.reRenderList();
    }

    reRenderList() {
        let cuisines = [];
        let itemsToDisplay = [];
        for (let i = 0; i < data.length; i++) {
            itemsToDisplay.push(data[i]);
            data[i]["Cuisine Style"].substring(1, data[i]["Cuisine Style"].length - 2).split(",")
                .forEach(cuisine => {
                    let c = cuisine.substring(1, cuisine.length - 1);
                    c = c.includes("'") ? c.substring(1, c.length - 1) : c;
                    if (cuisines.indexOf(c) < 0) { // ถ้ายังไม่มีอยู่ใน array
                        console.log(c)
                        cuisines.push(c)
                    }
                })
        }

        this.setState({ cuisines })

        this.setState({itemsToDisplay}, () => {
            this.setState({itemsToUse: [...this.state.itemsToDisplay]})
        })
    }

}
