package com.acij.common.tld;

import java.io.IOException;
import java.util.Iterator;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.acij.common.spring.security.model.Menu;
import com.acij.common.spring.security.model.Permiso;

public class MenuTag extends SimpleTagSupport {

	private Menu menu;

	private String rootMenu;
	private String submenu;
	private String menuItem;
	private String leafItem;
	private String rootItem;

	public void doTag() throws JspException, IOException {
		JspWriter out = getJspContext().getOut();

		StringBuffer buff = new StringBuffer();
		
		if (menu != null) {
			for (Iterator<Permiso> it = menu.getPermisos().iterator(); it.hasNext();) {
				Permiso item = it.next();

				String submenuHtml = createMenu(item);

				if (submenuHtml == null || "".equals(submenuHtml)) {
					String href = getRequest().getContextPath() + "/" + item.getUrl();
					if (item.getIconName() == null) {
						item.setIconName("");
					}
					
//					if (item.getPadreId() == null) {
						buff.append(leafItem.replace("[HREF]", href).replace("[ICON]", item.getIconName()).replace("[DESCRIPTION]", getLocalizedDescription(item.getDescripcion())));
//					} else {
//						buff.append(rootItem.replace("[HREF]", href).replace("[ICON]", item.getIconName()).replace("[DESCRIPTION]", getLocalizedDescription(item.getDescripcion())));
//					}

				} else {
					buff.append(menuItem.replace("[ICON]", item.getIconName()).replace("[DESCRIPTION]", getLocalizedDescription(item.getDescripcion()))
							.replace("[SUBMENU]", submenuHtml));
				}
			}
			buff.append("</li>");
		}

		String result = rootMenu.replace("[MENU]", buff.toString());
		out.println(result);
	}

	private String createMenu(Permiso permiso) {
		StringBuffer menu = new StringBuffer();

		if (permiso.getChildrens() != null) {
			for (Iterator<Permiso> it = permiso.getChildrens().iterator(); it.hasNext();) {
				Permiso child = it.next();

				String submenu = "";
				if (child.getChildrens() != null && child.getChildrens().size() > 0) {
					submenu = createMenu(child);
				}
				
				if (child.getHoja()) {
					String href = getRequest().getContextPath() + "/" + child.getUrl();
					if (child.getIconName() == null) {
						child.setIconName("");
					}
					
					if ("".equals(submenu)) {
						menu.append(leafItem.replace("[HREF]", href).replace("[ICON]", child.getIconName()).replace("[DESCRIPTION]", getLocalizedDescription(child.getDescripcion())));
					} else {
						menu.append(menuItem.replace("[ICON]", child.getIconName()).replace("[DESCRIPTION]", getLocalizedDescription(child.getDescripcion()))
								.replace("[SUBMENU]", submenu));
						
					}
				}
			}
		}

		return submenu.replace("[ITEMS]", menu.toString());
	}

	private String getLocalizedDescription(String key) {
		Locale locale = LocaleContextHolder.getLocale();
		return getMessageSource().getMessage(key, null, locale);
	}

	private HttpServletRequest getRequest() {
		PageContext pageContext = (PageContext) getJspContext();
		HttpServletRequest request = (HttpServletRequest) pageContext.getRequest();
		return request;
	}

	private MessageSource getMessageSource() {
		PageContext pageContext = (PageContext) getJspContext();
		WebApplicationContext springContext = WebApplicationContextUtils.getWebApplicationContext(pageContext.getServletContext());
		return (MessageSource) springContext.getBean("messageSource");
	}


	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public String getRootMenu() {
		return rootMenu;
	}

	public void setRootMenu(String rootMenu) {
		this.rootMenu = rootMenu;
	}

	public String getSubmenu() {
		return submenu;
	}

	public void setSubmenu(String submenu) {
		this.submenu = submenu;
	}

	public String getMenuItem() {
		return menuItem;
	}

	public void setMenuItem(String menuItem) {
		this.menuItem = menuItem;
	}

	public String getLeafItem() {
		return leafItem;
	}

	public void setLeafItem(String leafItem) {
		this.leafItem = leafItem;
	}

	public String getRootItem() {
		return rootItem;
	}

	public void setRootItem(String rootItem) {
		this.rootItem = rootItem;
	}
}