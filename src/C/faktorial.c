#include <stdio.h>
typedef long long ll;

ll faktorial(ll a){
    if(a == 0)
        return 1;
    return a * faktorial(a-1);
}


int main(void){
    ll inp;
    printf("Masukkan angka : ");
    scanf("%lld", &inp);
    (inp < 0) || (inp >63 )? printf("Angka harus >= 0 dan <= 63\n") : 0;
    printf("%lld", faktorial(inp));
}
