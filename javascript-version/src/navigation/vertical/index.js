// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Users'
    },
    {
      title: 'Editor',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Reporter',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Blogger',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'Tasks'
    },
    {
      title: 'Post',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Ad-management',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Review/Comment',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Inventory',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Log Out',
      path: '/form-layouts'
    }
  ]
}

export default navigation
