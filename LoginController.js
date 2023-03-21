Ext.define('apps.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        var form = this.getView('form').getForm();

              
              
              if(form.isValid()){
                var user = form.findField('user').getSubmitValue();
                var pass = form.findField('pass').getSubmitValue();

                if (user==='l' && pass==='123'){

                    this.getView().destroy();

                    Ext.Msg.alert('','Logged in successfully', function() {



                    localStorage.setItem("LoggedIn", true);

                        

                    Ext.create({

                        xtype: 'app-main'
                    });

                    
                        
                    });

                    
            
                }
                

              else{
                Ext.Msg.alert('Login fail');    
                }
          }
          else{
            Ext.Msg.alert('Login fail');    
          }


    }
});