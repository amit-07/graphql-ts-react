import React, { ReactElement, FC } from "react";

interface Props {
    title: String
}

const Header: FC<Props> = ({title}): ReactElement => {
    return (
        <header className="App-header">
            <nav>
                <ul>
                    <li>
                        <h2>
                            {title}
                        </h2>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;