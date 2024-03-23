export const API_KEY = 'AIzaSyAxMRxshEh3_VtrMGIiyQ3jF4i37Y5M9d4'

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}