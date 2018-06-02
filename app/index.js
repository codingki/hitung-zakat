import Expo from 'expo'
import React from 'react';

import {StackNavigator} from 'react-navigation'
import Home from './screens/home'
import Fitrah from './screens/zakat_fitrah'
import Perdagangan from './screens/zakat_perdagangan'
import Emas from './screens/zakat_emas'
import Profesi from './screens/zakat_profesi'
import Perternakan from './screens/zakat_perternakan'
import Tabungan from './screens/zakat_tabungan'
import Pertanian from './screens/zakat_pertanian'
import Hadiah from './screens/zakat_hadiah'
import BarangTemuan from './screens/zakat_barang_temuan'
import Pengaturan from './screens/pengaturan'

const RouteConfigs = {

	Home: {screen:Home},
	Fitrah: {screen:Fitrah},
	Perdagangan: {screen:Perdagangan},
	Emas: {screen:Emas},
	Profesi: {screen:Profesi},
	Perternakan: {screen:Perternakan},
	Pertanian: {screen:Pertanian},
	Tabungan: {screen:Tabungan},
	Hadiah: {screen:Hadiah},
	BarangTemuan: {screen:BarangTemuan},
	Pengaturan: {screen:Pengaturan},
}

const StackNavigatorConfig = {
  headerMode:'none',
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)
