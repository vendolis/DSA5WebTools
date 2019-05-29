import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from '@material-ui/core/styles';

import { Switch, Route, BrowserRouter } from "react-router-dom";

// own classes
import DSAAppBar from './DSAAppBar';

import SuccessesAndFailuresMain from './successes/SuccessesAndFailuresMain';
import CraftingMain from './crafting/CraftingMain';
import TreasuresMain from './treasures/TreasuresMain';
import TavernMain from './tavern/TavernMain';
import FaunaMain from './fauna/FaunaMain';
import SpellbookMain from './spellbook/SpellbookMain'
import OverviewMain from './OverviewMain';

import { DSAGrid, DSAGridRow} from './controls/DSAGrid';
import DSADescription from './controls/DSADescription';
import DSAInfoBox from './controls/DSAInfoBox';
import withRoot from '../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class Index extends Component {

  render() {
    const { classes } = this.props;

  let PAGES = [
    {
      title: "Crafting",
      page: <CraftingMain />,
      path: "/craftig",
      image: "img/crafting.jpg",
      description: "",
    },
    {
      title: "Successes And Failures",
      page: <SuccessesAndFailuresMain />,
      path: "/successes",
      image: "img/nahkampf-angriff-erfolg.jpg",
      description: "",
    },
    {
      title: "Treasures",
      page: <TreasuresMain />,
      path: "/treasures",
      image: "img/mondamulet.jpg",
      description: "",
    },
    {
      title: "Tavern",
      page: <TavernMain />,
      path: "/tavern",
      image: "img/Zwergenfest.jpg",
      description: "",
    },
    {
      title: "Fauna",
      page: <FaunaMain />,
      path: "/fauna",
      image: "img/tierkunde.jpg",
      description: "",
    },
    {
      title: "Spellbook",
      page: <SpellbookMain />,
      path: "/spellbook",
      image: "img/zauber.jpg",
      description: "",
    }
  ];

  PAGES.push({
    title: "Übersicht",
    page: <OverviewMain pages={PAGES}/>,
    path: "/",
    image: "img/buch.jpg",
    description: "",
  });

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <Route path="/DSA5WebTools/"
            render={({ location }) => (<>
              <DSAAppBar
                title={PAGES.find(p => p.path === location.pathname).title}
                pages={PAGES} />
              <Switch>
                {PAGES.map((p, i) => <Route key={i} path={p.path} render={() => p.page} />)}
              </Switch>
            </>
          )}/>
          <footer>
            <DSAGrid>
              <DSAGridRow>
                <DSAInfoBox>
                  <DSADescription caption="Impressum">
                    Website von David Pfahler.
                    Dieses Produkt wurde unter Lizenz erstellt. Das Schwarze Auge und sein Logo sowie Aventuria, Dere, Myranor, Riesland, Tharun und Uthuria
                    und ihre Logos sind eingetragene Marken von Significant GbR in Deutschland, den U.S.A. und anderen Ländern. Ulisses Spiele und sein Logo
                    sind eingetragene Marken der Ulisses Medien und Spiele Distribution GmbH.
                    Dieses Werk enthält Material, das durch Ulisses Spiele und/oder andere Autoren urheberrechtlich geschützt ist. Solches Material wird mit
                    Erlaubnis im Rahmen der Vereinbarung über Gemeinschaftsinhalte für SCRIPTORIUM AVENTURIS verwendet.
                    Alle anderen Originalmaterialien in diesem Werk sind Copyright 2018 von Moritz Schmid und werden im Rahmen der Vereinbarung über
                    Gemeinschaftsinhalte für SCRIPTORIUM AVENTURIS veröffentlicht.
                  </DSADescription>
                </DSAInfoBox>
              </DSAGridRow>
            </DSAGrid>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));