package com.acij.common.spring.security.model;

import java.util.List;

import com.acij.common.model.IdEntity;

public class Usuario extends IdEntity {

	private static final long serialVersionUID = 1L;

	private Grupo grupo;
	private String password;
	private String email;
	private String nombreCompleto;
	private String username;
	private transient byte[] image;
	private Boolean activo;

	// Transient
	private Menu menu;
	private String imageBase64;
	private String userUploadPath;
	private String imagePath;
	private Boolean noLogin;
	private List<Permiso> permisos;
	private Boolean selected;
	private String accessToken;
	
	public Usuario() {
		this.noLogin = false;
	}
	
	public String getUsername() {
		return username;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Grupo getGrupo() {
		return grupo;
	}

	public void setGrupo(Grupo grupo) {
		this.grupo = grupo;
	}

	public String getNombreCompleto() {
		return nombreCompleto;
	}

	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserUploadPath() {
		return userUploadPath;
	}

	public void setUserUploadPath(String userUploadPath) {
		this.userUploadPath = userUploadPath;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Boolean getNoLogin() {
		return noLogin;
	}

	public void setNoLogin(Boolean noLogin) {
		this.noLogin = noLogin;
	}

	public List<Permiso> getPermisos() {
		return permisos;
	}

	public void setPermisos(List<Permiso> permisos) {
		this.permisos = permisos;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public String getImageBase64() {
		return imageBase64;
	}

	public void setImageBase64(String imageBase64) {
		this.imageBase64 = imageBase64;
	}

	public Boolean getSelected() {
		return selected;
	}

	public void setSelected(Boolean selected) {
		this.selected = selected;
	}

	public Boolean getActivo() {
		return activo;
	}

	public void setActivo(Boolean activo) {
		this.activo = activo;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
}