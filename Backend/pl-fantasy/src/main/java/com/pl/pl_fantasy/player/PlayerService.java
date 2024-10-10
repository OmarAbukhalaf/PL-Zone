package com.pl.pl_fantasy.player;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class PlayerService {
    @Autowired
    private final PlayerRepository playerRepository;
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayers(){
        System.out.println("Playerepo findall------"+playerRepository.findAll());
        return playerRepository.findAll();
    }

    public List<Player> getPlayersByTeam(String team){
        return playerRepository.findAll().stream().filter(player -> team.equalsIgnoreCase(player.getTeam()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String search){
        return playerRepository.findAll().stream().filter(player -> player.getName().toLowerCase().contains(search.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByPosition(String position){
        return playerRepository.findAll().stream().filter(player -> player.getPosition().toLowerCase().contains(position.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByNation(String nation){
        return playerRepository.findAll().stream().filter(player ->player.getNation().toLowerCase().contains(nation.toLowerCase()))
                .collect(Collectors.toList());
    }
    public List<Player> getPlayersByTeamAndPosition(String team, String position){
        return playerRepository.findAll().stream().filter(player -> team.equals(player.getTeam()) && position.equals(player.getPosition()))
                .collect(Collectors.toList());
    }

    public Player addPlayer(Player player){
        playerRepository.save(player);
        return player;
    }

    public Player updatePlayer(Player updatedplayer){
        Optional<Player> existingplayer=playerRepository.findByName(updatedplayer.getName());
        if (existingplayer.isPresent()){
            Player playertoupdate = existingplayer.get();
            playertoupdate.setName(updatedplayer.getName());
            playertoupdate.setPosition(updatedplayer.getPosition());
            playertoupdate.setNation(updatedplayer.getNation());
            playertoupdate.setTeam(updatedplayer.getTeam());
            playertoupdate.setPosition(updatedplayer.getPosition());
            playerRepository.save(playertoupdate);
            return playertoupdate;
        }
        return null;
    }
    @Transactional
    public void deletePlayer(String name){
        playerRepository.deleteByName(name);
    }

}
