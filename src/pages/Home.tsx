import {Fragment} from 'react';
import Header from "../components/Header";
import ThemeGallery from "../components/ThemeGallery";

// Previously Index, now HomePage

const HomePage = () => {
    return (
        <Fragment>
            <Header />
			<ThemeGallery />
        </Fragment>
    );
}

export default HomePage;
