package com.pl.pl_fantasy.player;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="player_stats")
public class Player {
    @Id
    @Column(name="name", unique = true)
    private String name;
    @Column(name="nation")
    private String nation;
    @Column(name="pos")
    private String position;
    @Column(name="age")
    private int age;
    @Column(name="matches")
    private int matches;
    @Column(name="minutes")
    private int minutes;
    @Column(name="goals")
    private int goals;
    @Column(name="assists")
    private int assists;
    @Column(name="ganda")
    private int goalsandassists;
    @Column(name="yellow_cards")
    private int yellow_cards;
    @Column(name="red_cards")
    private int red_cards;
    @Column(name="xg")
    private double xG;
    @Column(name="team")
    private String team;

    public Player() {
    }

    public Player(String team, double xG, int red_cards, int yellow_cards, int goalsandassists, int assists, int goals, int minutes, int matches, int age, String position, String nation, String name) {
        this.team = team;
        this.xG = xG;
        this.red_cards = red_cards;
        this.yellow_cards = yellow_cards;
        this.goalsandassists = goalsandassists;
        this.assists = assists;
        this.goals = goals;
        this.minutes = minutes;
        this.matches = matches;
        this.age = age;
        this.position = position;
        this.nation = nation;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getMatches() {
        return matches;
    }

    public void setMatches(int matches) {
        this.matches = matches;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }

    public int getGoals() {
        return goals;
    }

    public void setGoals(int goals) {
        this.goals = goals;
    }

    public int getAssists() {
        return assists;
    }

    public void setAssists(int assists) {
        this.assists = assists;
    }

    public int getGoalsandassists() {
        return goalsandassists;
    }

    public void setGoalsandassists(int goalsandassists) {
        this.goalsandassists = goalsandassists;
    }

    public int getYellow_cards() {
        return yellow_cards;
    }

    public void setYellow_cards(int yellow_cards) {
        this.yellow_cards = yellow_cards;
    }

    public int getRed_cards() {
        return red_cards;
    }

    public void setRed_cards(int red_cards) {
        this.red_cards = red_cards;
    }

    public double getxG() {
        return xG;
    }

    public void setxG(double xG) {
        this.xG = xG;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    @Override
    public String toString() {
        return "Player{" +
                "name='" + name + '\'' +
                ", nation='" + nation + '\'' +
                ", position='" + position + '\'' +
                ", age=" + age +
                ", matches=" + matches +
                ", minutes=" + minutes +
                ", goals=" + goals +
                ", assists=" + assists +
                ", goalsandassists=" + goalsandassists +
                ", yellow_cards=" + yellow_cards +
                ", red_cards=" + red_cards +
                ", xG=" + xG +
                ", team='" + team + '\'' +
                '}';
    }
}
