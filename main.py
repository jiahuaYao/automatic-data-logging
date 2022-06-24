def on_log_full():
    global logging
    logging = False
    basic.show_icon(IconNames.SKULL)
datalogger.on_log_full(on_log_full)

def on_button_pressed_a():
    global logging
    logging = not (logging)
    if logging:
        basic.show_icon(IconNames.HEART)
    else:
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global logging
    if input.logo_is_pressed():
        basic.show_icon(IconNames.NO)
        datalogger.delete_log()
        logging = False
        datalogger.set_column_titles("x", "y", "z")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

logging = False
logging = False
datalogger.set_column_titles("x", "y", "z")

def on_every_interval():
    if logging:
        datalogger.log(datalogger.create_cv("x", input.acceleration(Dimension.X)),
            datalogger.create_cv("y", input.acceleration(Dimension.Y)),
            datalogger.create_cv("z", input.acceleration(Dimension.Z)))
loops.every_interval(100, on_every_interval)
