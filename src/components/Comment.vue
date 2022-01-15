<template>    
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-row>
                    <v-col cols="1"><v-avatar class="g-width-40 g-height-50 rounded-circle g-mt-3 g-mr-15" style="background-color:#54436B">
                    <span  style="color:white"><h2>N</h2></span>
                </v-avatar></v-col>
                    <v-col cols="11"><div class="media-body u-shadow-v18 g-bg-secondary g-pa-30 display-inline">
                    <div class="g-mb-15">
                        <h3 class="g-color-gray-dark-v1 mb-3">John Doe</h3>
                    </div>

                    <p class="pt-3">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                        felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div></v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    body{
    margin-top:20px;
    background:#eee;
    }
    @media (min-width: 0) {
        .g-mr-15 {
            margin-right: 1.07143rem !important;
        }
    }
    @media (min-width: 0){
        .g-mt-3 {
            margin-top: 0.21429rem !important;
        }
    }

    .g-height-50 {
        height: 50px;
    }

    .g-width-50 {
        width: 50px !important;
    }

    @media (min-width: 0){
        .g-pa-30 {
            padding: 2.14286rem !important;
        }
    }

    .g-bg-secondary {
        background-color: #fafafa !important;
    }

    .u-shadow-v18 {
        box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.15);
    }

    .g-color-gray-dark-v4 {
        color: #777 !important;
    }

    .g-font-size-12 {
        font-size: 0.85714rem !important;
    }

    .media-comment {
        margin-top:20px
    }
    
</style>