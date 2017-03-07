
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class AppService {
      http: any;
      baseUrl: string;
      token: string;

      constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'https://api.spotify.com/v1/';
        this.token = "BQB0mJ-UOPkl3Gsm4BsMqxShh3nZj9NvLgnjMK4sft4a9WyvOZ1Ebw-8ogTkkA3vQCAatvgKvPF_M_vNtDYgT25NdS65PmaZ_0EwveQ4Ddq1y9gp6NV6ryRE_-EpuLLMoe1FLFnHRM11dYsNWp0Q0pYvLtgLDWm3L3jzl3GPmKWEP9-HatLkm9APBnW_ilzrq91RniBnewWsnGbFX-I1Jeo950LW_EBAh3mDqTxpnkzLWjj5McMv2ZkX_MxLpJz1";

      }

      getPlaylists() {
        return this.http.get(this.baseUrl + 'me/playlists?&access_token=' + this.token).map(res => res.json());
      }


}
