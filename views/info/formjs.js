<div class="col-md-offset-1">
    <div>
        <div class="page-header">
            <h3>Form Js</h3>
        </div>
    </div>
    <div class="set-height">
        <div class="set_space row">
            <div class="row">
                Form tag
            </div>
            <code>
                   &lt;form name="form" role="form" novalidate ng-submit="submitForm()">
                </code>
            <div class="set_space"></div>
            <div class="row">
                Name input with error message
            </div>
            <code>
                    &lt;input type="text" class="form-control" name="name" ng-model="name" ng-required="true"><br>
                            &lt;div class="error"><br>
                                &lt;p ng-if="(form.name.$invalid == true && form.name.$dirty)"><br>Please enter name&lt;/p><br>
                            &lt;/div><br>
                </code>
            <div class="set_space"></div>
            <div class="row">
                Initializing text2 model form controller
            </div>
            <code>
                &lt;input type="text" ng-model="text2"><br>
            </code>
            <b>Inside the DirectivesController</b>
            <br>
            <code>
                var directivecont = this;<br>
                directivecont.scope = $scope;
                directivecont.scope.text2 = 'This is pre loaded data';
            </code>
            <div class="set_space">
                <div class="row">
                    Email input with error messages
                </div>
                <code>
                    &lt;input type="email" class="form-control" name="email" ng-model="email" ng-required="true"><br>
                            &lt;div class="error"><br>
                                &lt;p ng-if="(form.email.$invalid == true && form.email.$dirty && form.email.$viewValue != '')">Please enter valid email&lt;/p><br>
                                &lt;p ng-if="(form.email.$invalid == true && form.email.$dirty && form.email.$viewValue == '')">Please enter email&lt;/p><br>
                            &lt;/div><br>
                </code>
            </div>
        </div>
    </div>
    <div class="set_space row">
        <div class="col-md-offset-4">
            <btton class="btn btn-danger" ng-click="no()">Close</btton>
        </div>
    </div>
</div>
