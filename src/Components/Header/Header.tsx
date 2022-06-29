import React from 'react'
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

const Header = () => {

    return (
        <header>
            <Card  className="card column hero">
                <Card className="card column main_header">
                    <div className="header">
                        <h1>
                            Epicure works with the top
                            chef restaurants in Tel Aviv

                        </h1>
                    </div>
                    <div className="header_search">
                        {/*<img className="search_logo" src={SEARCH} alt="search"/>*/}
                        <Input header type="text"
                               placeholder="Search for restaurant, cuisine, chef"></Input>

                    </div>
                </Card>
            </Card>
        </header>

    )
}

export default Header
