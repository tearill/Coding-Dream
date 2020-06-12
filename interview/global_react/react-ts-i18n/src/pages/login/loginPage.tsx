import * as React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles, createStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
// withRouter ract-router-dom 的高阶组件 HOC
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const styles = theme => 
  createStyles({
    card: { // 样式的定制，量体裁衣
      maxWidth: 400,
      margin: "0 auto"
    }
  })

const LoginPageInner = (props) => {
  console.log(props);
  const { classes } = props;
  const { t, i18n } = useTranslation();
  return (
    <>
      <Card className={classes.card}>
        {/* 国际化 */}
        <CardHeader title={t("login")}></CardHeader>
      </Card>
    </>
  )
}

export const LoginPage = withStyles(styles)(withRouter(LoginPageInner));
