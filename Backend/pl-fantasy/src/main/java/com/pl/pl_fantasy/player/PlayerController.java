package com.pl.pl_fantasy.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React frontend

@RestController
@RequestMapping(path="api/player")
public class PlayerController {
    private final PlayerService playerService;
    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers(
        @RequestParam(required=false) String team,
        @RequestParam(required=false) String name,
        @RequestParam(required=false) String position,
        @RequestParam(required=false) String nation){
        if(team!=null && position!=null){
            return playerService.getPlayersByTeamAndPosition(team,position);
        }
        else if(team!=null) {
            return playerService.getPlayersByTeam(team);
        }
        else if(name!=null) {
            return playerService.getPlayersByName(name);
        }
        else if(position!=null) {
            return playerService.getPlayerByPosition(position);
        }
        else if(nation!=null) {
            return playerService.getPlayersByNation(nation);
        }
        else {
            return playerService.getPlayers();
        }
    }
    @PostMapping
    public ResponseEntity<Player> addPlayer(@RequestBody Player player){
        Player createdplayer=playerService.addPlayer(player);
        return new ResponseEntity<>(createdplayer, HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player){
        Player updatedplayer=playerService.updatePlayer(player);
        if(updatedplayer!=null){
            return new ResponseEntity<>(updatedplayer, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{playername}")
    public ResponseEntity<String> deletePlayer(@PathVariable String playername){
        playerService.deletePlayer(playername);
        return new ResponseEntity<>("Player deleted successfully",HttpStatus.OK);
    }
}
