import * as TowerCGDashboard from '@towercg/dashboard';
import './index.css';

import ExamplePlugin from '@towercg-plugins/example-dashboard';

const config = new TowerCGDashboard.Config();

config.registerPlugin(ExamplePlugin);

TowerCGDashboard.startApp(config);
