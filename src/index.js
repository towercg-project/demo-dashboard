import * as TowerCGDashboard from '@towercg/dashboard';
import './index.css';

import ExamplePlugin from '@towercg-plugins/example-dashboard';
import * as TwitchDashboard from '@towercg-plugins/twitch-dashboard';
import * as TimersDashboard from '@towercg-plugins/timers-dashboard';

const config = new TowerCGDashboard.Config();

config.registerPlugin(ExamplePlugin);
config.registerPlugin(TwitchDashboard.Plugins.GameInfo, { channel: "#tracecomplete_test" });
config.registerPlugin(TimersDashboard.Plugins.Manager);

TowerCGDashboard.startApp(config);
